import React,{Fragment} from "react";
import styled from "styled-components";
import Input from './Input'
import InputFile from './InputFile';
import Textarea from './Textarea';
import Button from './Button';
import moment from "moment";
import imageCompression from '../utils/imageCompression';
import cx from 'classnames'

import "./UploadModalDetail.scss";

const MAX_IMAGE_SIZE = 30000 // 30KB
const MAX_IMAGE_SIZE_MB = 0.03 // 30KB

interface IProps{}

interface IState{
    file: string,
    fileName: string,
    location: string,
    shareAddress: string,
    caption: string,
    warningMessage: string,
    isCompressing: false,
    memoryDate: number,
    memoryCalender: string
}


export default class UploadModalDetail extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            file: '',
            fileName: '',
            location: '',
            shareAddress: '',
            caption: '',
            warningMessage: '',
            memoryCalender: '',
            memoryDate: moment.now(),
            isCompressing: false,
        };

    }

    handleInputChange = (e:any) => {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFileChange = (e:any) => {
        const file = e.target.files[0]
        /**
         * If image size is bigger than MAX_IMAGE_SIZE(30KB),
         * Compress the image to load it on transaction
         * cf. Maximum transaction input data size: 32KB
         */
        if (file.size > MAX_IMAGE_SIZE) {
            // @ts-ignore
            this.setState({
                isCompressing: true,
            })
            return this.compressImage(file)
        }

        return this.setState({
            file,
            fileName: file.name,
        })
    }

    handleSubmit = (e:any) => {
        e.preventDefault()
        const { file, fileName, location, caption } = this.state
        // @ts-ignore
        this.props.uploadPhoto(file, fileName, location, caption)
        // ui.hideModal()
    }

    compressImage = async (imageFile:any) => {
        try {
            const compressedFile = await imageCompression(imageFile, MAX_IMAGE_SIZE_MB)
            this.setState({
                isCompressing: false,
                file: compressedFile,
                fileName: compressedFile.name,
            })
        } catch (error) {
            this.setState({
                isCompressing: false,
                warningMessage: '* Fail to compress image'
            })
        }
    }

    dateConverter = (e:any) => {
        this.setState({
            memoryDate: moment(e.target.value).unix()
        });
    };

    render() {
        const { fileName, location, caption, isCompressing, warningMessage,shareAddress } = this.state

        return (
            <Fragment>
                <Header> Upload Event NFT </Header>
                <form className="UploadPhoto" onSubmit={this.handleSubmit}>
                    <InputFile
                        className="UploadPhoto__file"
                        name="file"
                        label="Search file"
                        fileName={isCompressing ? 'Compressing image...' : fileName}
                        onChange={this.handleFileChange}
                        err={warningMessage}
                        accept=".png, .jpg, .jpeg"
                        required
                    />

                    <Input
                        className="UploadPhoto__location"
                        name="location"
                        label="Location"
                        value={location}
                        onChange={this.handleInputChange}
                        placeholder="Where did you take this photo?"
                        required
                    />

                    <Input
                        className="UploadPhoto__location"
                        name="shareAddress"
                        label="shareAddress"
                        value={shareAddress}
                        onChange={this.handleInputChange}
                        placeholder="Who do you want to share with?"
                        required
                    />

                    <MemoryDateLabel> Memory Date </MemoryDateLabel>

                    <MemoryDateInput onChange={this.dateConverter} type="date"/>

                    <Textarea
                        className="UploadPhoto__caption"
                        name="caption"
                        value={caption}
                        label="Caption"
                        onChange={this.handleInputChange}
                        placeholder="Upload your memories"
                        required
                    />

                    <Button
                        className="UploadPhoto__upload"
                        type="submit"
                        title="Upload"
                    />
                </form>
            </Fragment>
        )
    }
}

const Header = styled.header`
    display:flex;
    width:100%;
    height: 60px;
    font-weight: bold;
    line-height: 1;
    color: #999999;
    justify-content: center;
    align-items: center;
`;

const MemoryDateLabel = styled.label`
    display: block;
    font-size: 12px;
    font-weight: bold;
    color: #999999;
    margin-bottom: 8px;
`;

const MemoryDateInput = styled.input`
    width: 100%;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    padding: 22px 24px;
    border-radius: 5px;
    margin-bottom: 24px;
`;