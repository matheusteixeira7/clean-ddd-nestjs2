import { Product, type AddProductInputDto } from '#modules/products/domain'
import { type ProductRepository } from '#modules/products/infra'
import { type UseCaseInterface } from '#seedwork/domain'

export class AddProductUseCase implements UseCaseInterface {
  private readonly _productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute(input: AddProductInputDto): Promise<void> {
    const props = {
      category: input.category,
      colors: input.colors,
      createdAt: input.createdAt,
      description: input.description,
      details: input.details,
      id: input.id,
      images: input.images,
      name: input.name,
      price: input.price,
      rating: input.rating,
      size: input.size,
      stock: input.stock,
      subcategory: input.subcategory,
      updatedAt: input.updatedAt,
    }

    const product = new Product(props)
    await this._productRepository.add(product)
  }
}
