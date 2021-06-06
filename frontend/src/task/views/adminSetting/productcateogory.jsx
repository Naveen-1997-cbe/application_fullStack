import React from 'react'
import Table from "../../component/tableProduct";
import Dialog from "../../component/dialog";
import Modal from "../../component/modal";
function Productcateogory() {
    const [productList, setProductList] = React.useState([

        "Medicines",
        "Cosmetics",
        "Electronics",
        "Hardwares",
        "Fancy Products"
    ]





    )
    const [openDialog, setOpenDialog] = React.useState(false);
    const [productIndex, setProductIndex] = React.useState('');
    const handleCloseDialog = () => setOpenDialog(false);
    const [open, setOpen] = React.useState(false);
    const [newProduct, setNewProduct] = React.useState('');
    const [filterSearch, setFilterSearch] = React.useState('');
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenDialog = (index) => {
        setOpenDialog(true);
        setProductIndex(index)
    }
    const handleClose = () => setOpen(false);

    const handleOpen = (product, index) => {
        setOpen(true);
        setProductIndex(index)
        setNewProduct(product);
        console.log('index',productIndex);
    }
    const handleDelete = async (index) => {

        console.log("first", productList);
        let allProductList = [...productList];
        allProductList.splice(productIndex, 1);
        await setProductList(allProductList);
        console.log('second', productList)
        setOpenDialog(false);
        // setOpen(false);
    }
    const userEditOption = (value) => {
        setProductList(productList.map((item, index) => {
            if (index === productIndex) {
                item = value;

                return item;
            }
            return item;
        }))
        setOpen(false);
    }
    const handleAddPopup = () => {
        setOpenAdd(true)
    }
    const handleCloseAdd = () => setOpenAdd(false);
    const handleUpdate = (e) => {
        e.preventDefault();
        userEditOption(e.target.product.value)
    }
    const handleFilerSearch = (e) => {
        setFilterSearch(e.target.value.substr(0, 20))
    }
    let filteredStates = productList.filter(
        (items) => {
            return items.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
        }
    );
    const handleAdd = (e)=>{
        e.preventDefault();
        let newProduct = e.target.product.value;
        productList.push(newProduct);
        setOpenAdd(false);
    }

    return (
        <div>
            <h3>Total no of products : {productList.length} </h3>
            <Table
                contents={filteredStates}
                delete={handleOpenDialog}
                edit={handleOpen}
                filterMethod={handleFilerSearch}
                add={handleAddPopup}
            />
            <div>
                <Dialog
                    open={openDialog}
                    close={handleCloseDialog}
                    delete={handleDelete}
                />
            </div>
            <div>
                <Modal
                    open={open}
                    close={handleClose}
                    content={
                        <div>
                            <form onSubmit={handleUpdate}>
                                <h3 className="edit-heading">Update Details</h3>
                                <input type="text" name="product" defaultValue={newProduct} className="fileds" />
                                <button className="btn">Save</button>
                            </form>
                        </div>}
                />
            </div>
            <div>
                <Modal
                    open={openAdd}
                    close={handleCloseAdd}
                    content={
                        <div>
                            <form onSubmit={handleAdd}>
                                <h3 className="edit-heading">Add Product</h3>
                                <label for="product">Product Name</label>
                                <input type="text" id="product" name="product" placeholder="Product" className="fileds" />
                                <button className="btn">Save</button>
                            </form>
                        </div>}
                />
            </div>
        </div>
    )
}

export default Productcateogory
