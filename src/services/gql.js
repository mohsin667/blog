import { gql } from "graphql-request";

export const featuredPostsQuery = () => {
    const query = gql`
        query featuredPostsQuery {
        featuredPosts {
          title
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          categories {
            categoryName
          }
        }
      }
    `
    return query
}

export const getPostsQuery = () => {
    const query = gql`
    query getPosts {
        posts {
          title
          descripition {
            raw
          }
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          categories {
            categoryName
          }
        }
      }
    `
    return query 
}

export const getAllCategoriesQuery = () => {
    const query = gql`
        query getAllCategoriesQuery {
            categories {
                categoryName
                id
            }
        }
      
        `
    return query 
}

export const getCategoryQuery = () => {
    const query = gql`
            query getCategoryQuery($id: ID!) {
                category(where: {id: $id}) {
                posts {
                    title
                    descripition {
                    raw
                }
                coverPicture {
                    url
                }
                slug
                createdTimeAndDate
                author {
                    name
                    avatar {
                    url
                    }
                }
                }
                }
            }
        `
    return query 
}

export const getAllCategoryQuery = () => {
    const query = gql`
    query getAllCategoriesQuery {
        categories {
            posts {
                title
                descripition {
                    raw
                }
                coverPicture {
                    url
                }
                slug
                createdTimeAndDate
                author {
                    name
                    avatar {
                        url
                    }
                }
                categories {
                    categoryName
                }
            }
        }
    }
    
    `
    return query 
}


export const getAllPostQuery = () => {
    const query = gql`
    query getAllPostQuery($slug: String!) {
        post(where: {slug: $slug}) {
           title
          descripition {
            raw
          }
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          categories {
            categoryName
          }
        }
      }
      
        `
    return query 
}

export const getAllFeaturedPostQuery = () => {
    const query = gql`
    query getAllFeaturedPostQuery($slug: String!) {
        featuredpost(where: {slug: $slug}) {
           title
          descripition {
            raw
          }
          coverPicture {
            url
          }
          slug
          createdTimeAndDate
          author {
            name
            avatar {
              url
            }
          }
          categories {
            categoryName
          }
        }
      }
      
        `
    return query 
}
