import { useEffect } from "react";

const useApiLoader = () => {
  const useProductLoader = (productLoader, setData) => {
    useEffect(() => {
      productLoader({
        successFn: data => {
          setData(data); // 성공 시 데이터 설정
        },
        failFn: data => {
          alert(`${productLoader.name} 실패`);
        },
        errorFn: data => {
          alert(`서버상태 불안정, 다음에 ${productLoader.name} 시도`);
        },
      });
    }, [productLoader, setData]);
  };
  return { useProductLoader };
};

export default useApiLoader;
