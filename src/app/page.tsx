'use client'

import {ChangeEvent, useState} from "react";
import Image from 'next/image';

export default function Home() {
  const [state, setState] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = (e.target as any).files[0]

      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = (e) => {
          const binary = e?.target?.result

          setState(binary as string)
      }

      reader.onerror = function(e) {
          console.log('Error : ' + e.type);
      };
  }

  return (
    <main>
        <div className='btn-group'>
      <input accept='image/*' name='image' onChange={onChange} type='file' />
        <button onClick={()=>{
            setState('')
        }} className='reset'>Сброс</button>
        </div>
            {state && <Image className='img'  width={300} height={300} alt='test' src={state} />}
        <div className='binary'>{state}</div>
    </main>
  );
}
