import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { t } from 'i18next'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_5izt01m', 
      'template_t89iwds',
      {
        from_name: form.name,
        to_name: 'Carlos',
        from_email: form.email,
        to_email: 'jesusmontilva2201@gmail.com',
        message: form.message
      },
      'cY8gGxgvhCNA0YWPG'
    )
    .then(() => {
      try {
        setloading(false);
        alert(t("contact_alert_send"));
    
        setForm({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        setloading(false);
        console.log(error);
    
        alert(t('contact_alert_error'));
      }
    })
  }

  const handleDownload = async () => {
    const response = await fetch('/MontilvaCarlosFrontendResumeOG.pdf');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation()

  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>{t('contact_sub_text')}</p>
          <h3 className={styles.sectionHeadText}>{t('contact_title')}</h3>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('contac_form_name')}</span>
              <input 
                type="text" 
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t("contac_form_name_placeholder")}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('contact_form_email')}</span>
              <input 
                type="email" 
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact_form_email_placeholder")}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t('contact_form_message')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact_form_message_placeholder")}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            >
              {loading ? t('contact_submit_done') : t('contact_submit')}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 flex flex-col items-center  sm:w-[800px] sm:h-[800px] md:w-[790px] md:h-[790px]'
        >
          <EarthCanvas />
          <button 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            onClick={handleDownload}
          >
            {t("download_resume")}
          </button>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");