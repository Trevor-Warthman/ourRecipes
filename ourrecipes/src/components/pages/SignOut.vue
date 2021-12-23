<template>
    you have been signed out!
    <br>
    Redirecting to home page in: {{this.secondsTilLogout}} seconds
</template>

<script>
import firebase from '../firebaseApp'

export default {
    created() {
        firebase.auth().signOut();
    },
    mounted() {
        setInterval(() => {
            this.secondsTilLogout -= 1
            if(this.secondsTilLogout == 0) {
                this.$router.push("/")
            }
        }, 1000);
    },
    data() {
        return {
            secondsTilLogout: 5
        }
    }
};
</script>
