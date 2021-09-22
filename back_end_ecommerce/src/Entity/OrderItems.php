<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * OrderItems
 *
 * @ORM\Table(name="order_items", indexes={@ORM\Index(name="IDX_62809DB0FCDAEAAA", columns={"order_id_id"})})
 * @ORM\Entity
 */
class OrderItems
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
     * @var int
     *
     * @ORM\Column(name="quantity", type="integer", nullable=false)
     */
    private $quantity;

    /**
     * @var datetime_immutable
     *
     * @ORM\Column(name="created_at", type="datetime_immutable", nullable=false)
     */
    private $createdAt;

    /**
     * @var datetime_immutable|null
     *
     * @ORM\Column(name="modified_at", type="datetime_immutable", nullable=true)
     */
    private $modifiedAt;

    /**
     * @var \OrderDetails
     *
     * @ORM\ManyToOne(targetEntity="OrderDetails")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="order_id_id", referencedColumnName="id")
     * })
     */
    private $orderId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

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

    public function getOrderId(): ?OrderDetails
    {
        return $this->orderId;
    }

    public function setOrderId(?OrderDetails $orderId): self
    {
        $this->orderId = $orderId;

        return $this;
    }


}
