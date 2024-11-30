export default function SomeContent() {
    const images = {
        img1: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db3678787ff9cc28c7f776_Logo-NVIDIA.avif",
        img2: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db3679b3ab3ec8fd0962f8_Publicis-Groupe-Logo%201.avif",
        img3: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db3679b3ab3ec8fd0962f8_Publicis-Groupe-Logo%201.avif",
        img4: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db36785404cc152e648ec6_Mask%20group.avif",
    }

    return (
      <div className='flex justify-center'>
         {
                Object.keys(images).map((key, index) => {
                    return (
                        <>
                        <div key={index} className="gap-10 mr-40">
                        <img src={images[key]} alt=""  className='h-10 w-20 '/>
                        </div>
                        </>
                    )
                })
         }
      </div>
    );
  }