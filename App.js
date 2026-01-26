import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const isValidPhone = phone.length === 10 && /^[0-9]+$/.test(phone);

  const handleChange = (text) => {
    setPhone(text);

    if (text.length === 0) {
      setError('');
    } else if (!/^[0-9]+$/.test(text)) {
      setError('Số điện thoại chỉ được chứa chữ số');
    } else if (text.length !== 10) {
      setError('Số điện thoại phải đủ 10 chữ số');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={handleChange}
        maxLength={10}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          isValidPhone && styles.buttonActive
        ]}
        disabled={!isValidPhone}
      >
        <Text
          style={[
            styles.buttonText,
            isValidPhone && styles.buttonTextActive
          ]}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#fff',
  },
});
