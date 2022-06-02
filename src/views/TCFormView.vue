<template>
    <div class="outer-container">
        <div class="container">
            <div>
                <div class="termsAndConditionsText">
                    <h1 class="headerText">Terms & Conditions and Customer Information</h1>
                    <p class="bodyText">To help us guide you to the right information, please help us identify which type of user you are by selecting the correct options from the below dropdown menu</p>
                </div>
                <div class="termsAndConditionsInputForm">
                    <p class="formHeader">Please select from the dropdowns</p>


                    <div class="countryOfResidence form-item">
                        <div>What is your country of residence?</div>
                        <select v-model="residenceCountry">
                            <option disabled value="">Please Select your Country</option>
                            <option>Germany</option>
                        </select>
                    </div>


                    <div class="userRegistration form-item">
                        <div>Are you registered as a user on the 360X platform?</div>
                        <select v-model="userRegistered"  @change="addStyleForActiveBtn()" :disabled="isDisabledResidence">
                            <option disabled value="">Please select whether you are registered as a user</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                    
                    <template v-if="this.userRegistered === 'Yes'">
                        <div class="email form-item">
                            <div>Please provide the email adress you used to register on the 360x platform</div>
                            <input v-model="userEmail" placeholder="Your 360x email" />
                        </div>
                    </template>
                    
                </div>


                <div class="termsAndConditionsBtn">
                    <div>
                        <a v-bind:href="computePath">
                            <button :disabled="disabledBtn" id="routerBtn" class="nav-link btn btn-ghost">Send Form</button>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                residenceCountry: '',
                userRegistered: '',
                userEmail: ''
            }
        },
        computed: {
            isDisabledResidence() {
                return !this.residenceCountry.localeCompare('');
            },
            isDisabledUserRegistered() {
                if (!this.userRegistered.localeCompare('Yes')) {
                    return false;
                } else {
                    return true;
                }
            },
            disabledBtn() {
                if (this.userRegistered.localeCompare('Yes')) {
                    return true;
                } else {
                    return false;
                }
            },
            computePath() {
                return '/country=' + this.residenceCountry + '/user=' + this.userRegistered + '/email=' + this.userEmail
            },
        },
        methods: {
            addStyleForActiveBtn() {
                const routeBtn = document.getElementById("routerBtn");
                if (!this.userRegistered.localeCompare('Yes')) {
                    routeBtn.classList.add("btn-active");
                } else if (!this.userRegistered.localeCompare('No') || !this.userRegistered.localeCompare('')) {
                    routeBtn.classList.remove("btn-active");
                }
                return true;
            },
        }
    }
</script>

<style>

.outer-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 100px;
}

.container {
    margin-left: 400px;
    margin-right: 400px;
}
.headerText {
    font-size: 64px;
    font-weight: 300;
    letter-spacing: -1px;
    line-height: 70px;
}

.bodyText {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.2px;
    line-height: 35px;
    margin-bottom: 80px;
}

.formHeader {
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    color: rgb(163, 171, 169);
}

.termsAndConditionsBtn {
    margin-top: 30px;
    margin-bottom: 50px;
}

.btn-ghost {
    background-color: #4A4A4A;
    color: white;
    padding: 8px 24px;
    border-radius: 50px;
    font-weight: bold;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    text-decoration: none;
}

/*
.btn-ghost:hover {
    background-color: #FF2774;
    color: white;
}
*/

.btn-active:hover {
    background-color: #FF2774;
    color: white;
}

.form-item {
    margin-bottom: 30px;
}

select, input {
    width: 70%;
}

button {
    border: none;
}

</style>