import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as LayoutsTheHeader } from '../../components/layouts/TheHeader.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutsTheHeader = import('../../components/layouts/TheHeader.vue' /* webpackChunkName: "components/layouts-the-header" */).then(c => wrapFunctional(c.default || c))
