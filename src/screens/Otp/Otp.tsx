import { IonPage, IonContent, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import AuthHeaderSection from '../../components/AuthHeaderSection/AuthHeaderSection'

import "./Otp.css"



const Otp = () => {
    const history = useHistory()

    return (
        <IonPage>
            <IonContent className="">
                <IonFab horizontal='start' vertical='top'>
                    <IonFabButton id='back_btn' onClick={() => history.push("/register")}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonFabButton>
                </IonFab>

                <AuthHeaderSection title='OTP' />

                <section className="auth_section ion-padding">

                    <div className='my-3 ion-padding'>
                        <span>A 6 digit otp code was sent to +2344958656, enter the code below</span>
                    </div>

                    <form action="" className='mt-3'>
                        {/* TODO: restrict input character number to one  */}
                        <div className="otp_inputs_container">
                            <input type="text" inputMode={'numeric'} className="otp_input"  />
                            <input type="text" inputMode={'numeric'} className="otp_input"  />
                            <input type="text" inputMode={'numeric'} className="otp_input"  />
                            <input type="text" inputMode={'numeric'} className="otp_input"  />
                        </div>
                        

                        <IonButton expand='block' className='fill mt-5' size='large'>
                            Continue
                        </IonButton>
                    </form>


                    <div className="timer_container text-center mt-4">
                        Resend top in <span>12:00</span> <br />
                        <span className='mt-3' id='resend_btn'>Resend</span>
                    </div>

                </section>
            </IonContent>
        </IonPage>
    )
}

export default Otp