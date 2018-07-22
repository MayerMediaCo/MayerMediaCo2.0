import React from 'react'
import EmailCaptureForm from '../email-capture-form/email-capture-form'

const CallToAction = () => (
  <section className="section" id='call-to-action'>
    <div className="columns">
      <div className="column">
        <h1>Want Actionable Tips to Build Your Online Presence?</h1>
        <h3>Sign Up to Recieve A Free Audit</h3>
        <p>Sign up and receive to receive an audit checklist and an optional
          questionairre that you can turn in to have a free web or marketing audit by me
          and a follow up list of actionable tips to help improve your online presence.</p>
      </div>
    </div>

    <EmailCaptureForm/>

  </section>
)

export default CallToAction