<template>
    you have been signed out!
</template>

<script>
import firebase from '../firebaseApp'

export default {
    created() {
        firebase.auth().signOut();
    }
};
</script>
