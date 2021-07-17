import Head from 'next/head'
import usePointer from '../hooks/usePointer'
const index = () => {
  const properties = usePointer()

  const td1 = `py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap overflow-auto w-1/2`
  const td2 = `py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre overflow-auto w-1/2`

  return (
    <div className='container mx-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16'>
      <Head>
        <title>usePointer</title>
      </Head>
      <div>
        <div className='pb-10'>
          <h1 className='inline-block text-3xl font-extrabold text-gray-900 tracking-tight font-mono'>
            usePointer()
          </h1>
        </div>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th
                className='
              z-20
              sticky
              top-0
              text-sm
              font-semibold
              text-gray-600
              bg-white
              p-0
            '
              >
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  Property
                </div>
              </th>
              <th
                className='
              z-20
              sticky
              top-0
              text-sm
              font-semibold
              text-gray-600
              bg-white
              p-0
            '
              >
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
                  <td translate='no' className={td1}>
                    {key}
                  </td>
                  <td translate='no' className={td2}>
                    {value}
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

export default index
