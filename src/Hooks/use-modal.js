import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit]=useState(false);

  return {show, setShow, isEdit, setIsEdit}
}
