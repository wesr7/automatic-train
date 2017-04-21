import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  product_invention_name: String,
  description: String,
  benefits_features: String,
  difference_in_marketplace: String,
  similar_or_competing: String,
  being_sold_list: String,
  cost_to_manufacture: String,
  prototype_prod_peice_present: String,
  patent_status: String,
  other_protection: String,
  video_product_invention: String,
  photos_product_invention: String,
  sales_marketing_brochure: String
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

export default Product;
