import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);

  return {show, setShow}
}
