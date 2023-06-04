import { useEffect, useState } from "react"

const useModelScale = () => {
  const [modelScale, setModelScale] = useState(1)

  const handleResizeModelScale = (width) => {
    if (width >= 950) {
      setModelScale(1)
    }
    if (width < 950) {
      setModelScale(0.8)
    }
    if (width < 600) {
      setModelScale(0.6)
    }
  }

  useEffect(() => {
    const width = window.innerWidth
    handleResizeModelScale(width)
    window.addEventListener("resize", (e) => handleResizeModelScale(e.target.outerWidth))
    return () => window.removeEventListener("resize", handleResizeModelScale)
  }, [])

  return { modelScale }
}

export default useModelScale
