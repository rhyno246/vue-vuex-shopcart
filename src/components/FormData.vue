<template>
    <div>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form class="form" @submit.prevent="submit">

                <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:10"
                >
                    <v-text-field
                        v-model="name"
                        :counter="10"
                        :error-messages="errors"
                        label="Name"
                        required
                    >
                    </v-text-field>
                </validation-provider>
                
                <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                    required: true,
                    digits: 7,
                    regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
                    }"
                >
                    <v-text-field
                    v-model="phoneNumber"
                    :counter="7"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                >
                    <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                    ></v-text-field>
                </validation-provider>
                
                <validation-provider
                    v-slot="{ errors }"
                    name="message"
                    rules="required|max:500"
                >
                    <v-textarea
                        v-model="message"
                        :error-messages="errors"
                        label="message"
                        required
                    >
                    </v-textarea>
                </validation-provider>

                <v-btn type="submit" :disabled="invalid" class="mt-4">
                    submit
                </v-btn>
            </form>
        </validation-observer>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="400"
            >
            <v-card>
                <v-card-title class="headline">
                   Sent Request Success !!!
                </v-card-title>
                <v-card-text>Thanks For Your Comment </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        CLOSE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import axios from 'axios'
setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data (){
        return {
            phoneNumber: '',
            email: '',
            message : '',
            name : '',
            dialog: false,
        }
    },
    methods : {
        async submit () {
            this.$refs.observer.validate()
            await axios.post('https://my-zue-default-rtdb.firebaseio.com/request.json', {
                phone : this.phoneNumber,
                email : this.email,
                message : this.message,
                name : this.name
            })
            this.dialog = true
            this.name == ""
            this.email == ""
            this.message == ""
            this.phoneNumber == ""
        },
    }
}
</script>

<style lang="scss">
.form{
    width: 100%;
}
</style>