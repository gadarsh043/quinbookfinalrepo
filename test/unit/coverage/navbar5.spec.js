import { shallowMount } from '@vue/test-utils'
import navbar5 from '@/components/navbar5.vue'
import {config} from '@vue/test-utils'

config.showDeprecationWarnings = false

describe('navbar5.vue',() => {

    //for axios
    const session = {"isTrusted": false}
    const obj ={
        sessionId :session
    }
    const mockFn1 = jest.fn()
    const axios ={
        post :mockFn1,
        get :mockFn1
    }
    const item = 'adarsh'
    const localstorage ={
        getItem : session
    }

    it('calling axios ishika', () => {
        const wrapper = shallowMount(navbar5, { mocks: {axios, obj, localstorage}, methods:{logoutUser : mockFn1} })
        wrapper.find('#logout').trigger('click')
        expect(axios.post).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalled()
    })

})