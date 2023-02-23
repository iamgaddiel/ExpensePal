import { IonButton, IonContent, IonPage } from '@ionic/react'
import { useHistory } from 'react-router'

import "./Landing.css"

import Background from "../../assets/images/leaf.resized.jpg"



const Landing = () => {
  const history = useHistory()


  return (
    <IonPage>
      <IonContent className=''>
        <section className="page_container" style={{ backgroundImage: `url(${Background})` }}>

          <section className="landing_content ion-padding">
            <span>Mange your finance more easiseer with ExpensePal</span>


          </section>

          <section className="ladning_buttons ion-padding">
            <div>
              <IonButton
                className='fill text-capitalize'
                id='skip_btn'
                mode='ios'
                expand='block'
                size='large'
                onClick={() => history.push("/login")}
                >
                Skip
              </IonButton>

              <IonButton
                className="fill text-capitalize"
                id='next_btn'
                expand='block'
                mode='ios'
                size='large'
              >
                Next
              </IonButton>
            </div>
          </section>
        </section>
      </IonContent>
    </IonPage>
  )
}

export default Landing
