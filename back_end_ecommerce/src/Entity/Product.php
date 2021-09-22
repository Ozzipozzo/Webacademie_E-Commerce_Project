<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Product
 *
 * @ORM\Table(name="product", indexes={@ORM\Index(name="IDX_D34A04AD546E46C0", columns={"discount_id_id"}), @ORM\Index(name="IDX_D34A04AD9777D11E", columns={"category_id_id"}), @ORM\Index(name="IDX_D34A04ADA3D83557", columns={"inventory_id_id"})})
 * @ORM\Entity
 */
class Product
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="text", length=0, nullable=false)
     */
    private $price;

    /**
     * @var datetime_immutable|null
     *
     * @ORM\Column(name="modified_at", type="datetime_immutable", nullable=true)
     */
    private $modifiedAt;

    /**
     * @var datetime_immutable|null
     *
     * @ORM\Column(name="deleted_at", type="datetime_immutable", nullable=true)
     */
    private $deletedAt;

    /**
     * @var string|null
     *
     * @ORM\Column(name="img", type="string", length=255, nullable=true)
     */
    private $img;

    /**
     * @var datetime_immutable|null
     *
     * @ORM\Column(name="created_at", type="datetime_immutable", nullable=true)
     */
    private $createdAt;

    /**
     * @var \Discount
     *
     * @ORM\ManyToOne(targetEntity="Discount")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="discount_id_id", referencedColumnName="id")
     * })
     */
    private $discountId;

    /**
     * @var \ProductCategory
     *
     * @ORM\ManyToOne(targetEntity="ProductCategory")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id_id", referencedColumnName="id")
     * })
     */
    private $categoryId;

    /**
     * @var \ProductInventory
     *
     * @ORM\ManyToOne(targetEntity="ProductInventory")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="inventory_id_id", referencedColumnName="id")
     * })
     */
    private $inventoryId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getModifiedAt(): ?\DateTimeImmutable
    {
        return $this->modifiedAt;
    }

    public function setModifiedAt(?\DateTimeImmutable $modifiedAt): self
    {
        $this->modifiedAt = $modifiedAt;

        return $this;
    }

    public function getDeletedAt(): ?\DateTimeImmutable
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?\DateTimeImmutable $deletedAt): self
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getDiscountId(): ?Discount
    {
        return $this->discountId;
    }

    public function setDiscountId(?Discount $discountId): self
    {
        $this->discountId = $discountId;

        return $this;
    }

    public function getCategoryId(): ?ProductCategory
    {
        return $this->categoryId;
    }

    public function setCategoryId(?ProductCategory $categoryId): self
    {
        $this->categoryId = $categoryId;

        return $this;
    }

    public function getInventoryId(): ?ProductInventory
    {
        return $this->inventoryId;
    }

    public function setInventoryId(?ProductInventory $inventoryId): self
    {
        $this->inventoryId = $inventoryId;

        return $this;
    }


}
