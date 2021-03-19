import { shallowMount } from '@vue/test-utils'
import navbar from '@/components/navbar.vue'
import { config } from '@vue/test-utils'

config.showDeprecationWarnings = false
describe('navbar.vue', () => {
  const $route = {
    path1: '/feed',
    path2: '/notification'
    }
  const logOutMockFn = jest.fn()
  const mockFunc = jest.fn()
  const $router = {
    push: mockFunc
  }
  it('Navbar component is rendered', () => {
    const wrapper = shallowMount(navbar)
    // check if navbar is rendered
    expect(wrapper.find('#navbar')).toBeTruthy()
  })
  it('Logo image is rendered', () => {
    const wrapper = shallowMount(navbar)
    expect(wrapper.find('img[id="quinlogo"]').exists()).toBe(true)
  })
  it('Clicking on logo should call routing method', () => {
    const wrapper = shallowMount(navbar, { mocks: { $route, $router } })
    wrapper.find('#quinlogo').trigger('click')
    expect($router.push).toHaveBeenCalledWith($route.path1)
  })
  it('Clicking on notification icon should call routing method', () => {
    const wrapper = shallowMount(navbar, { mocks: { $route, $router } })
    wrapper.find("#icon1").trigger('click')
    expect(mockFunc).toHaveBeenCalledWith($route.path2)
  })
  
  it('Clicking on logout icon should call logoutUser method', async () => {
    const wrapper = shallowMount(navbar, {
    mocks: { $route },
    methods: { logoutUser: logOutMockFn }
    })
    await wrapper.find('#logout').trigger('click')
    expect(logOutMockFn).toHaveBeenCalled()
    })
})