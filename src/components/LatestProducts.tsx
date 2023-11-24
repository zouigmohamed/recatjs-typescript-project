import { ChangeEvent, useState , FormEvent} from "react";
import { formInputsList, furnitureProducts } from "../data";
import { FurnitureProduct } from "../interfaces";
import ProductCard from "./ProductCard";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Modal from "./ui/Modal";
const LatestProducts = () => {
  const defaultProductObj = {
    id: "",
    title: "",
    price: "",
    imageUrl: "",
    description: "",
    colors: [],
    sizes: [],
    category: "",
  };  const [product, setProduct] = useState<FurnitureProduct>(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);
  //**? starts handlers  */
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const onCancel = () => {
    setProduct(defaultProductObj);
    // closeEditModal();
    console.log("cancel");
    closeModal()
    
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(product);
    
    // const { title, description, price, imageURL } = product;

    // const errors = productValidation({
    //   title,
    //   description,
    //   price,
    //   imageURL,
    // });

    // const hasErrorMsg =
    //   Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

    // if (!hasErrorMsg) {
    //   setErrors(errors);
    //   return;
    // }

    // setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev]);
    // setProduct(defaultProductObj);
    // setTempColor([]);
    // closeModal();

    // toast("Product has been added successfully!", {
    //   icon: "👏",
    //   style: {
    //     backgroundColor: "black",
    //     color: "white",
    //   },
    // });
  };
  // const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();
  //   // const { title, description, price, imageURL } = productToEdit;

  //   // const errors = productValidation({
  //   //   title,
  //   //   description,
  //   //   price,
  //   //   imageURL,
  //   // });

  //   // const hasErrorMsg =
  //   //   Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

  //   // if (!hasErrorMsg) {
  //   //   setErrors(errors);
  //   //   return;
  //   // }

  //   // const updatedProducts = [...products];
  //   // updatedProducts[productToEditIdx] = { ...productToEdit, colors: tempColors.concat(productToEdit.colors) };
  //   // setProducts(updatedProducts);

  //   // setProductToEdit(defaultProductObj);
  //   // setTempColor([]);
  //   // closeEditModal();


  // };
  //**? ends handlers  */

  //* rendering all products and pass them to product card component 👍
  const ListOfProducts = furnitureProducts.map((pro) => (
    <ProductCard key={`${pro.id}-${pro.title}`} product={pro} />
  ));
  //?render form inputs 👍
  const formInputs = formInputsList.map((input) => {
    return (
      <div className="flex flex-col" key={`${input.id}-${input.name}`}>
        <label
          className="mb-[4px] text-sm font-medium text-gray-700"
          htmlFor={input.id}
        >
          {input.label}
        </label>
        <Input
          type={input.type}
          id={input.id}
          name={input.name}
          value={product[input.name]}
          onChange={onChangeHandler}
        />
      </div>
    );
  });

  return (
    <main className="container">
      <div className="">
        <Button
          onClick={() => openModal()}
          className="text-black bg-indigo-400  hover:bg-indigo-600 px-3 mb-4 py-1 right-10  top-[120px]"
          width="w-full"
        >
          open
        </Button>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto">
        {ListOfProducts}
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Create New Listing "
        >
          <form className="space-y-2" onSubmit={submitHandler}>
            {formInputs}
            <div className="flex items-center space-x-2">
              <Button type="submit" className="text-black bg-indigo-400  hover:bg-indigo-600">
                submit
              </Button>
              <Button onClick={onCancel} className="text-black bg-gray-400  hover:bg-gray-600">
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default LatestProducts;
