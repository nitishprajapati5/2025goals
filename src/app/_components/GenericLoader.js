import  ComponentLoading  from './ComponentLoading'
import  PageLoading  from './PageLoading'
import ProgressBar from './ProgressBar'

export default function GenericLoadingComponent({typeofLoading}){
    return(
        <>
            {
            (() => {
              switch(typeofLoading){
                case 'componentLoading':
                    return <ComponentLoading /> 
                case 'pageLoading':
                    return <PageLoading />
                case 'ProgressBar':
                    return <ProgressBar /> 
                default:
                    return null
              }  
            })
            }

        </>
    )
}