import React, {createRef, useEffect} from "react";

export const useCopyToClipboard = (textToCopy, onSuccess, onError) => {
  const clickRef = createRef()

  const copyHandler = () => {
    if (!navigator.clipboard) {
      return
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        onSuccess && onSuccess()
      })
      .catch(() => {
        onError && onError()
      })
  }

  useEffect(() => {
    if (clickRef.current) {
      clickRef.current.addEventListener('click', copyHandler)
    }
    return () => {
      clickRef.current?.removeEventListener('click', copyHandler)
    }
  }, [clickRef])

  return clickRef
}
