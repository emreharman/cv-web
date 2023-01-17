const formatDateForInput=(date=new Date())=>{
    const temp=new Date(date)
    const year=temp.getFullYear()
    let month=String(temp.getMonth()+1)
    if(Number(month) < 10){
        month="0"+month
    }

    const day=temp.getDate()
    return `${year}-${month}-${day}`
}

export default formatDateForInput