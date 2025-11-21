<template>
  <div class="signup-page">
    <div class="signup-card">
      <form @submit.prevent="handleSignup">
        <div class="field">
          <label for="email">Email</label>
          <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Email"
              required
          />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              required
          />
        </div>

        <!-- Parooli veateade – kuvatakse ainult siis, kui midagi on sisestatud -->
        <div v-if="password && passwordErrors.length" class="error-msg">
          <strong>The password is not valid:</strong>
          <ul>
            <li v-for="(err, index) in passwordErrors" :key="index">
              {{ err }}
            </li>
          </ul>
        </div>

        <div class="actions">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    passwordErrors() {
      const pw = this.password;
      const errors = [];

      if (pw.length < 8) {
        errors.push("At least 8 characters long.");
      }
      if (pw.length >= 15) {
        errors.push("Less than 15 characters long.");
      }
      if (!/[A-Z]/.test(pw)) {
        errors.push("Includes at least one uppercase letter.");
      }
      const lowercaseMatches = pw.match(/[a-z]/g) || [];
      if (lowercaseMatches.length < 2) {
        errors.push("Includes at least two lowercase letters.");
      }
      if (!/[0-9]/.test(pw)) {
        errors.push("Includes at least one numeric value.");
      }
      if (!/^[A-Z]/.test(pw)) {
        errors.push("Starts with an uppercase letter.");
      }
      if (!pw.includes("_")) {
        errors.push('Includes the character "_".');
      }

      return errors;
    }
  },
  methods: {
    handleSignup() {
      if (this.passwordErrors.length > 0) {
        alert("Fix your password first.");
        return;
      }
      alert("Signup successful (dummy).");
    }
  }
};
</script>

<style scoped>
.signup-page {
  height: 100vh;           /* fill page */
  display: flex;
  justify-content: center; /* horisontaalis keskel */
  align-items: center;     /* vertikaalis keskel */
  background-color: #ffffff;
}

.signup-card {
  background-color: #cfead9;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 320px;
  max-height: 320px;
  min-height: 110px;
}

.field {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

label {
  width: 90px;
  margin-right: 10px;
  font-weight: 600;
}

input {
  flex: 1;
  max-width: 230px;
  padding: 6px 10px;
  border-radius: 18px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 0.9rem;
}

.actions {
  text-align: center;
  margin-top: 12px;
}

button {
  padding: 8px 26px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: #4a9ae9;
  color: white;
  font-weight: 600;
}

button:hover {
  opacity: 0.9;
}

.error-msg {
  margin-top: 8px;
  margin-bottom: 8px;
  color: #c0392b;
  font-size: 0.9rem;
}
</style>
