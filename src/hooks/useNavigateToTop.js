import { useNavigate } from 'react-router-dom'

export function useNavigateToTop() {
  const navigate = useNavigate()
  return (path) => {
    window.scrollTo(0, 0);
    return navigate(path)
  }
}
