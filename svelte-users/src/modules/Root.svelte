<script lang="ts">
    import { Router, Route } from 'svelte-navigator'

    import Header from '@components/Header.svelte'
    import Footer from '@components/Footer.svelte'
    import Content from '@components/Content.svelte'
    import HomePage from '@modules/pages/Home/index.svelte'
    import AboutPage from '@modules/pages/About/index.svelte'
</script>

<Header />
<Content className="container">
    <Router primary={ false }>
        <Route path="/" component={ HomePage } />
        <Route path="about" component={ AboutPage } />
    </Router>
</Content>
<Footer />