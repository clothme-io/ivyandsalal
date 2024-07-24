/* eslint-disable jsx-a11y/alt-text */
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useState } from 'react';
import { AddBrandTabContentProps } from '../_types';
import { Button } from '@nextui-org/react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type Props = AddBrandTabContentProps

const Visuals = (props: Props) => {
  // handles logo upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [logoFile, setLogoFile] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setLogoFile(newFileList);
  }

  // handle banner image upload
  const [previewBannerOpen, setPreviewBannerOpen] = useState(false)
  const [previewBannerImage, setPreviewBannerImage] = useState('');
  const [bannerFile, setBannerFile] = useState<UploadFile[]>([]);

  const handleBannerPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewBannerImage(file.url || (file.preview as string));
    setPreviewBannerOpen(true);
  };

  const handleBannerChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setBannerFile(newFileList);
  }

  // Handle form submit
  const handleBasicInfoSubmit = (event: any) => {
    event.preventDefault()
    // const name = event.target.elements.name.value
    console.log("The images ===", event.target);
    console.log("The images logoFile ===", logoFile[0]?.originFileObj);


    props?.onProceed?.({ name: 'socials', data: {} })
  }

  return (
    <form onSubmit={handleBasicInfoSubmit}>
      <div>
        <h3 className='text-xl font-medium mb-2'>Logo</h3>
        <Upload
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          // action=""
          listType="picture-circle"
          fileList={logoFile}
          onPreview={handlePreview}
          onChange={handleChange}
          maxCount={1}
        >
          {logoFile.length ? null : (
            <button type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload Logo</div>
            </button>
          )}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}

        <h3 className='text-xl font-medium mb-2 mt-10'>Banner</h3>
        <Upload
          // action=""
          listType="picture"
          fileList={bannerFile}
          onPreview={handleBannerPreview}
          onChange={handleBannerChange}
          maxCount={1}
        >
          {bannerFile.length ? null : (
            <button
              className='flex gap-2 items-center rounded border-dashed border p-3
            border-black'
              type="button">
              <PlusOutlined />
              <div>Upload banner</div>
            </button>
          )}
        </Upload>
        {previewBannerImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewBannerOpen,
              onVisibleChange: (visible) => setPreviewBannerOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewBannerImage(''),
            }}
            src={previewBannerImage}
          />
        )}

        <Button type='submit' className='bg-primary-orange rounded px-6 mt-10 self-start'>
          Save & Proceed
        </Button>
      </div>
    </form>
  )
}

export default Visuals