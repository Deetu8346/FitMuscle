export const exerciseOptions =  {
    method: 'GET',
    headers: {
       
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': "33e1f4a806mshba26b47724be0c1p14b1fbjsn2b7a387e7ade"
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    

    headers: {
      'X-RapidAPI-Key': '33e1f4a806mshba26b47724be0c1p14b1fbjsn2b7a387e7ade',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData=async(url,options) => {
    const response =await fetch (url,options);
    const data =await response.json();
    // console.log(data);
    return data;
}