//Componente en el que se muestra la informacion del usuario, dentro del perfil de la version responsive
app.component('detail-user', {
    data() {
        return {
           name: localStorage.getItem("name"),
           country: localStorage.getItem("country"),
        }
    },
    methods: {
        logout() {
            token= localStorage.getItem("token");
            
            /*config = { headers: { Authorization: `Bearer Token  ${token}` }};
            bodyParameters = {  name: 'Axios POST with Bearer Token' };*/

            axios({
                method: 'GET',
                url: 'http://localhost/prueba/public/api/users/logout',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(
                    (response) => {
                     //  console.log(response.data)
                        window.location.href = 'http://localhost/TheKitchen2.0/dist/login.html';
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
      

    },
    template:
        /* html */
        `<section>
                <div class="background-responsive">
                    <div class="row">
                        <i class="center mt-5"><img class="photo-user-big" src="./images/photos-users/photo-user.jpg" alt="photo user"></i>
                        <h1 class="text-center mt-4 text-big">{{name}}</h1>
                    </div>
                    <h4 class="center mt-2 start ms-3 me-3">About Me</h4>
                    <p class="center mt-2 start ms-3 me-3">From {{country}}</p>
                </div>
                <div class="row center"> 
                    <!--<button class="center btn-orange-light  mt-3 hover-grow"><a class="header-link" style="color:black" href="edit-profile.html">Edit profile</a></button>-->
                    <button class="center btn-orange-dark mt-3 mb-4 hover-grow" @click="logout()">Log Out</button>
                </div>
        <section>`
})