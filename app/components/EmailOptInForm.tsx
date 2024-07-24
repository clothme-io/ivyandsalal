import React from 'react';
import { toast } from 'sonner';
import { useAddEarlyAccessAction } from '../(nav)/_actions/earlyAccessQuery';
import { EarlyCustomerAccessRequestModel } from '../(nav)/_api/earlyAccessModel';

export const runtime = "edge";

type Props = {
  className?: string
  action: {
    title: string
    // callback?: (email: string) => Promise<void>
  }
  note?: string
}

export const EmailOptInForm = ({
  action = { title: 'Join As VIP' },
  note,
  className = ''
}: Props) => {

  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { mutate, data, error } = useAddEarlyAccessAction()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log("This is the data passed to when submitting", e)
    try {
      // const res = await action.callback?.(email)
      const input: EarlyCustomerAccessRequestModel = {
        email: email
      }

      mutate(input)

      setEmail('')

    } catch (error) {
      console.error('Error submitting email', error)
      toast.error('Failed to submit email')
    } finally {
      setLoading(false)
      toast('Email submitted')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`block ${className}`}>
      <div className='flex items-start max-md:flex-col max-md:items-center gap-[15px] md:gap-5 [&_*]:rounded-[10px] md:text-xl font-semibold'>
        <div className='flex-1 max-md:w-full flex flex-col gap-2.5'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-4 px-[15px]
            bg-[#F1F1F1] placeholder:text-[#00000026] outline-primary-blue
            transition-all duration-300'
            placeholder='Enter email here'
            type="email"
            required
          />
          {!!note && <p className='text-[#00000066] text-[8px] md:text-xs text-center'>{note}</p>}
        </div>
        <button
          disabled={loading}
          className='py-4 px-[22px] text-white bg-primary-blue
          focus:outline-primary-yellow relative'>
          {action.title}
          {loading && (
            <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
              <div className='w-5 h-5 border-l-3 border-white rounded-full animate-spin'></div>
            </div>
          )}
        </button>
      </div>
    </form>
  )
}
