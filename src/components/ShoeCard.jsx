
const ShoeCard = ({imgUrl, changeBigShoeImage,bigShoeImg}) => {
  const handeClick = () => {
    if(bigShoeImg !== imgUrl.bigShoe){
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }
  
  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}  onClick = {handeClick}>

        <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">

          <img src={imgUrl.thumbnail} width={120} height={103} className="object-contain" />
        </div>

      </div>
  )
}

export default ShoeCard