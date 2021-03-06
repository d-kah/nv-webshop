import { productTypes2 } from '../data'
import Product from '../components/product/Product'
import produce from 'immer'

export default class Action {
  static setProductDetail = (dispatch, product) => {

    console.log('Product here',product);

    const prd = new Product(product);

    return dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: { ...prd }
    })
  }

  static setTabValues = (dispatch, obj) => {

    return dispatch({
      type: 'SET_TAB_VALUES',
      payload: obj
    })
  }


  static setSearchTerm = (dispatch, searchTerm) => {
    return dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm.toLowerCase()
    })
  }


  static setSearchResults = (dispatch, products, term = null) => {
    let searchResults = products;

    if (term) {
      searchResults = products.filter(p =>
        p.productType.toLowerCase().includes(term));

      //if (searchResults.length === 0) searchResults = products;
    }

    return dispatch({
      type: 'SET_SEARCH_RESULTS',
      payload: searchResults
    })
  }


  static setProductType = (dispatch, productType = 'all products') => {

    return dispatch({
      type: 'SET_PRODUCT_TYPE',
      payload: productType
    })
  }

  static toggle = (dispatch, objKey) => {

    return dispatch({
      type: 'TOGGLE',
      payload: objKey
    })
  }

  /*
toggleMobileDrawer


  static setProductDetailSpecial = (dispatch, productType, caseModel) => {

    /*
    if (productType === productTypes.CASE) {
      return dispatch({
        type: 'SET_CASE_SPECIAL',
        payload: caseModel
      })
    }
    /

    if (productType === productTypes2.KIT.key) {

      return dispatch({
        type: 'SET_KIT_SPECIAL',
        payload: caseModel
      })
    }
  }
  */

}



