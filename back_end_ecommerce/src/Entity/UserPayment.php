<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserPayment
 *
 * @ORM\Table(name="user_payment", indexes={@ORM\Index(name="IDX_35259A07A76ED395", columns={"user_id"})})
 * @ORM\Entity
 */
class UserPayment
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
     * @var string|null
     *
     * @ORM\Column(name="payment_type", type="string", length=255, nullable=true)
     */
    private $paymentType;

    /**
     * @var string|null
     *
     * @ORM\Column(name="provider", type="string", length=255, nullable=true)
     */
    private $provider;

    /**
     * @var int|null
     *
     * @ORM\Column(name="account_no", type="integer", nullable=true)
     */
    private $accountNo;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="expiry", type="date", nullable=true)
     */
    private $expiry;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPaymentType(): ?string
    {
        return $this->paymentType;
    }

    public function setPaymentType(?string $paymentType): self
    {
        $this->paymentType = $paymentType;

        return $this;
    }

    public function getProvider(): ?string
    {
        return $this->provider;
    }

    public function setProvider(?string $provider): self
    {
        $this->provider = $provider;

        return $this;
    }

    public function getAccountNo(): ?int
    {
        return $this->accountNo;
    }

    public function setAccountNo(?int $accountNo): self
    {
        $this->accountNo = $accountNo;

        return $this;
    }

    public function getExpiry(): ?\DateTimeInterface
    {
        return $this->expiry;
    }

    public function setExpiry(?\DateTimeInterface $expiry): self
    {
        $this->expiry = $expiry;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}
