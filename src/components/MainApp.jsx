import Header from "./Header"
import Contents from "./Contents"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getGifs } from "../api/api"
import { useInView } from 'react-intersection-observer'
import Banner from "./Banner"


function MainApp(){

  const [keyword, setKeyword] = useState('')

  const [gifsData, setGifsData] = useState([])

  const [showBanner, setShowBanner] = useState(false)

  const { ref, inView, entry } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['gifs', keyword],
    queryFn: getGifs,
    getNextPageParam: (lastPage, pages) => {
      if(lastPage.next.length > 0){
        return lastPage.next
      }
      return undefined  // set hasNextPage to false
    },
    enabled: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if(keyword.length > 0){
      refetch()
    }
  }, [keyword])

  useEffect(() => {
    if(data){
      setGifsData(data.pages)
    }
  }, [data])

  useEffect(() => {
    if(inView){
      getGifsNextPage()
    }
  }, [inView])


  function getGifsNextPage(){
    if(hasNextPage){
      fetchNextPage()
    }
  }

  return (
    <>
      <Banner showBanner={showBanner} setShowBanner={setShowBanner}/>
      <Header setKeyWord={setKeyword} />
      <Contents gifsData={gifsData} status={status} error={error} isFetching={isFetching} setShowBanner={setShowBanner}/>
      <span ref={ref}></span>
    </>
  )
}

export default MainApp