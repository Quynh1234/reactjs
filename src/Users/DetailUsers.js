import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailUsers = () => {
    const { id } = useParams(); // Hook để lấy tham số từ route
    const navigate = useNavigate(); // Hook để điều hướng

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(res.data.data || {});
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu người dùng", error);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleBackButton = () => {
        navigate('/user'); // Sử dụng navigate để quay lại '/user'
    };

    const isEmptyUser = Object.keys(user).length === 0;

    return (
        <div>
            <h2>Xin chào người dùng với ID: {id}</h2>
            {!isEmptyUser && (
                <>
                    <div>Tên người dùng: {user.first_name} {user.last_name}</div>
                    <div>Email người dùng: {user.email}</div>
                    <div>Ảnh đại diện: <img src={user.avatar} alt="Ảnh đại diện" /></div>
                    <div>
                        <button onClick={handleBackButton}>Quay lại</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default DetailUsers;
