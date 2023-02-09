function CardStyle3() {
  return (
    <div className="max-w-3xl">
      <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
        <div className="md:flex md:flex-row">
          <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
              className="rounded-full shadow-md"
              alt="woman avatar"
            />
          </div>
          <div className="md:ml-6">
            <p className="text-gray-500 font-light mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
              sapiente molestiae numquam quas, voluptates omnis nulla ea odio
              quia similique corrupti magnam.
            </p>
            <p className="font-semibold text-xl mb-2 text-gray-800">Anna Smith</p>
            <p className="font-semibold text-gray-500 mb-0">Product manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStyle3;
