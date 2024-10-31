import React from 'react'
import EmbededMap from '../../components/Utils/EmbededMap'

const Footer = () => {
  const items = [
    {
      heading: 'Customers',
      links: [
        {
          href: '#',
          text: 'Buyer'
        },
        {
          href: '#',
          text: 'Supplier'
        }
      ]
    },
    {
      heading: 'Company',
      links: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Careers'
        },
        {
          href: '#',
          text: 'Contact us'
        }
      ]
    },
    {
      heading: 'Further Information',
      links: [
        {
          href: '#',
          text: 'Terms & Conditions'
        },
        {
          href: '#',
          text: 'Privacy Policy'
        }
      ]
    },

  ]
  return (
    <footer className='bg-slate-950 text-slate-50 p-4 relative'>
      <div className='dotted-background absolute top-0 left-0 w-full h-full z-0'></div>

      <div className='flex gap-4 relative z-1'>
        <div>
          <div className='flex gap-4 justify-between mb-8'>
            <Card
              heading={'Simplicity'}
              content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam?'}
            />
            <Card
              heading={'Simplicity'}
              content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam?'}
            />
            <Card
              heading={'Simplicity'}
              content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam?'}
            />
          </div>

          <div className='flex justify-between mb-4'>
            {
              items.map(({ heading, links }, index) => (
                <List
                  key={index}
                  heading={heading}
                  links={links}
                />
              ))
            }
          </div>
        </div>

        <EmbededMap />
      </div>
    </footer>
  )
}



function Card({ heading, content }) {
  return (
    <div className='max-w-sm'>
      <div className='flex gap-2 items-center mb-2'>
        <div className='w-6 h-6 rounded bg-indigo-400 text-white'></div>
        <strong>{heading}</strong>
      </div>
      <p className='text-slate-400 text-sm'>{content}</p>
    </div>
  );
}

function List({ heading, links }) {
  return (
    <div>
      <strong>{heading}</strong>
      <ul>
        {
          links.map(({ text, href }, index) => (
            <li
              key={index}
              className='text-slate-300 text-sm'
            >
              <a href={href}>{text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Footer