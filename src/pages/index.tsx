import Head from 'next/head'
import usePointer from '../hooks/usePointer'

const Index = () => {
  const properties = usePointer({
    throttle: 100,
    debounce: 100,
  })

  return (
    <div className='container flex-auto min-w-0 px-4 pt-10 pb-24 mx-auto sm:px-6 xl:px-8 lg:pb-16'>
      <Head>
        <title>usePointer</title>
      </Head>
      <div>
        <div className='pb-10'>
          <h1 className='inline-block font-mono text-3xl font-extrabold tracking-tight text-gray-900'>
            usePointer()
          </h1>
        </div>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  Property
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pl-2 border-b border-gray-200'>
                  Value
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(properties).map((entry) => {
              const [key, value] = entry
              return (
                <tr key={key}>
                  <td
                    translate='no'
                    className='w-1/2 py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                  >
                    {key}
                  </td>
                  <td
                    translate='no'
                    className='w-1/2 py-2 pl-2 overflow-auto font-mono text-xs text-blue-600 whitespace-pre'
                  >
                    {String(value)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Index
