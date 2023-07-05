//Cuadro en el que se muestra la informacion del usuario, dentro del perfil de la version de desktop
app.component('box-user', {
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
        `<div class="container center mt-1 col-md-12 margin-box box-width">
            <div class="row box-user-big center mt-2 col margin-box center-img-detail">
                <div>
                    <i class="center mt-3"><img class="photo-user-big hover-grow cover" src="./images/photos-users/photo-user.jpg" alt="photo user"></i>
                    <h1 class="text-center mt-4 text-big-orange hover-grow">{{name}}</h1>
                    <p class="text-center mt-2 text-med">About Me</p>
                    <p class="text-center mt-2">From {{country}}</p>
                </div>
                    <div class="row center">
                        <!--<button class="center btn-orange-light btn-width-max mt-3 hover-grow"><a class="header-link" style="color:black" href="edit-profile.html">Edit profile</a></button>-->
                        <button class="center btn-orange-dark btn-width-max mt-3 hover-grow" @click="logout()">Log Out</button>
                    </div>
            </div>
        </div>`
})
