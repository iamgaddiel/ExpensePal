import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonList, IonPage } from '@ionic/react'
import { arrowBackOutline, mailOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import AuthHeaderSection from '../../components/AuthHeaderSection/AuthHeaderSection'



const ForgetPassword = () => {
    const history = useHistory()


    return (
        <IonPage>
            <IonContent>
                <IonFab horizontal='start' vertical='top'>
                    <IonFabButton id='back_btn' onClick={() => history.push("/login")}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>

                <AuthHeaderSection title='Forget Password' />


                <form action="" className='mt-3 ion-padding'>
                    <IonList lines='none'>
                        <IonItem className='mt-3'>
                            <IonIcon icon={mailOutline} slot="start" />
                            <IonInput type='password' placeholder='Enter email' />
                        </IonItem>
                    </IonList>

                    <IonButton expand='block' className='fill mt-3' size='large'>
                        Continue
                    </IonButton>

                </form>

            </IonContent>
        </IonPage>
    )
}

export default ForgetPassword