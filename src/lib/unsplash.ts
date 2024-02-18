import {createApi} from 'unsplash-js'
export const unspash = createApi({
    accessKey : process.env.NEXT_PUBLIC_UNSPLASH_KEY!,
    fetch : fetch,
})