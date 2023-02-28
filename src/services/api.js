import {request, gql} from 'graphql-request'
import * as gqlQuery from './gql'

export const featuredPost = async () => {
    const res = await request(process.env.REACT_APP_URL, gqlQuery.featuredPostsQuery());
    return res
}

export const getPosts = async () => {
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getPostsQuery());
    return res
}

export const getAllCategories = async () => {
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getAllCategoriesQuery());
    return res
}

export const getCategory = async (id) => {
    const idObject = {
        id:id
    }
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getCategoryQuery(), idObject);
    return res
}

export const getAllCategory = async (id) => {
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getAllCategoryQuery());
    return res
}

export const getAllPost = async (id) => {
    const idObject = {
        slug:id
    }
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getAllPostQuery(), idObject);
    return res
}

export const getAllFeaturedPost = async (id) => {
    const idObject = {
        slug:id
    }
    const res = await request(process.env.REACT_APP_URL, gqlQuery.getAllFeaturedPostQuery(), idObject);
    return res
}
