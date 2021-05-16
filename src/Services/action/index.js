import { auth, provider, storage, db } from '../../firebase/firebase'
import firebase from 'firebase'
import { SET_USER, SET_POST } from './actionType'

export const setUser = (payload) =>({
    type: SET_USER,
    user: payload,
})
export const setPosts = (payload) =>({
    type: SET_POST,
    post: payload,
})

export function signInAPI() {
    return (dispach)=>{
        auth.signInWithPopup(provider).then((payload)=>{
            //dispach(setUser(payload.user))
            console.log(payload)
        }).catch((error)=> alert(error.message) )
    }
}

export function getUserAuth() {
    return (dispach)=>{
        auth.onAuthStateChanged( async (user)=> {
            if(user){
                dispach(setUser(user))
            }
        } )
    }
}
export function signOutAPI() {
    return (dispach) =>{
        auth.signOut().then(()=>{
            dispach(setUser(null))
        }).catch((error)=>{
            console.log(error.message)
        })
    }
}

export function postArticleAPI(payload) {
    return (dispach)=>{
        const {description, file} = payload
        const upload = storage.ref(`images/${file.name}`).put(file)
        upload.on("state_change", (snapshot)=>{
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error)=>{
            console.log(error)
        }, ()=>{
           storage.ref("images").child(file.name).getDownloadURL().then((url)=>{
               db.collection("posts").add({
                    description,
                    image: url,
                    currentTime: firebase.firestore.FieldValue.serverTimestamp(),
               })
           })
        })
    }
}

export function getPostAPI(){
    return (dispach)=>{
        let payload
        db.collection("posts").orderBy("currentTime", "desc").onSnapshot((sna)=>{
            payload = sna.docs.map((doc)=> doc.data())
            dispach(setPosts(payload)) 
        })
    }
}