
export function ProductImage() {
    return <picture>
        <source srcSet="image-product-desktop.jpg" media="(min-width: 376px)" />
        <img src="image-product-mobile.jpg" alt="" width="300px" height="450px" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} />
    </picture>
}