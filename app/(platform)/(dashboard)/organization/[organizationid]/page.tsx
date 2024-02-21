 import React, { Suspense } from 'react'
import { Info } from './_components/info'
import { Separator } from '@/components/ui/separator'
import { BoardList } from './_components/boardlist'
 
 const organizationPage = () => {
   return (
     <div> 
      <Info/>
      <Separator className='my-4'/>
      <div className='px-2 md:px-4'>
        <Suspense fallback={ <BoardList.Skeleton/>}>
  <BoardList/>
  </Suspense>
      </div>
     </div>
   )
 }
 
 export default organizationPage